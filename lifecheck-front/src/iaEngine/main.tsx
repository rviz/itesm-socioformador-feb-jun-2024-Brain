import OpenAI from "openai";
const openai = new OpenAI();
 
async function main() {
  const assistant = await openai.beta.assistants.create({
    name: "Financial Analyst Assistant",
    instructions: "You are an expert financial analyst. Use you knowledge base to answer questions about audited financial statements.",
    model: "gpt-4o",
    tools: [{ type: "file_search" }],
  });
}
 
main();


const fileStreams = ["edgar/goog-10k.pdf", "edgar/brka-10k.txt"].map((path) =>
    fs.createReadStream(path),
  );
   
  // Create a vector store including our two files.
  let vectorStore = await openai.beta.vectorStores.create({
    name: "Financial Statement",
  });
   
  await openai.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, fileStreams)

  await openai.beta.assistants.update(assistant.id, {
    tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
  });


  await openai.beta.assistants.update(assistant.id, {
    tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
  });


  // A user wants to attach a file to a specific message, let's upload it.
const aapl10k = await openai.files.create({
    file: fs.createReadStream("edgar/aapl-10k.pdf"),
    purpose: "assistants",
  });
  
  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: "user",
        content:
          "How many shares of AAPL were outstanding at the end of of October 2023?",
        // Attach the new file to the message.
        attachments: [{ file_id: aapl10k.id, tools: [{ type: "file_search" }] }],
      },
    ],
  });
  
  // The thread now has a vector store in its tool resources.
  console.log(thread.tool_resources?.file_search);


  const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
    assistant_id: assistant.id,
  });
   
  const messages = await openai.beta.threads.messages.list(thread.id, {
    run_id: run.id,
  });
   
  const message = messages.data.pop()!;
  if (message.content[0].type === "text") {
    const { text } = message.content[0];
    const { annotations } = text;
    const citations: string[] = [];
  
    let index = 0;
    for (let annotation of annotations) {
      text.value = text.value.replace(annotation.text, "[" + index + "]");
      const { file_citation } = annotation;
      if (file_citation) {
        const citedFile = await openai.files.retrieve(file_citation.file_id);
        citations.push("[" + index + "]" + citedFile.filename);
      }
      index++;
    }
  
    console.log(text.value);
    console.log(citations.join("\n"));
  }

// Vector stores

const vectorStore = await openai.beta.vectorStores.create({
    name: "Product Documentation",
    file_ids: ['file_1', 'file_2', 'file_3', 'file_4', 'file_5']
});

const file = await openai.beta.vectorStores.files.createAndPoll(
    "vs_abc123",
    { file_id: "file-abc123" }
  );