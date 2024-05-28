query = """
        #     UPDATE user_evaluation_category_analysis
        #     SET feedback_education = %s 
        #     WHERE user_id = %s 
        #     AND user_evaluation_category_analysis_id = %s;
        # """