# Codename

### Considerations
- **What is a codename?**  
    - A **codename** is a **temporary name** given to a new drug while it’s still in **development**. It acts as a **provisional label** until the drug receives an **official name**.

- **What is the purpose of a codename?**  
    - It helps **track** the drug throughout its **development process**.

- **Why are there multiple synonyms?**  
    - Different researchers may refer to the **same drug** using **various names** during the research phase.

- **Why are scientists interested in this?**  
    - Codenames make it easier to **organize** and **track** the progress of the drug in development. They **facilitate communication** between researchers and help ensure **intellectual property protection** during the research process.

- **What were the challenges encountered in this project?**
    - The **main challenge** of this project was **scheduling execution pipelines**, organizing and tracking **large volumes of scientific articles**, and **extracting codenames** using automated pipelines. Another challenge was **unifying synonyms** and **distinguishing information** as **False Positive** and **True Positive** to ensure **precision in codename extraction**. Finally, developing a **data visualization platform** was also challenging, as it needed to display **relevant information** for scientists, such as **paper ID**, **publication year**, and other **essential details** about the codename.


### Technologies and Tools Used

This project was implemented using several technologies and tools:

- **Python**: Used as the main programming language for data processing and analysis.
- **MongoDB**: Employed as the primary database to store and manage large volumes of documents.
- **Docker & Rancher**: Used for scheduling cron jobs to keep the database updated and synchronized.
- **PubChem API**: Utilized for validating codenames to enhance data accuracy.
- **Cell Lines and Gene Names Database (blacklist)**: This database, containing about 20,000 entries, helped filter and refine the pipeline, especially in identifying true and false positives.

### Data Flow and Automation Pipeline

The pipeline was structured to handle data ingestion, processing, verification, and visualization:

1. **Data Ingestion**: Data from various sources, primarily scientific articles, was pulled into MongoDB for storage and processing.
2. **Processing**: Utilizing a list of cell lines and gene names to refine data by filtering out unrelated content and identifying relevant entries.
3. **Verification**: The PubChem API was used to validate codenames, improving the accuracy and reliability of extracted data.
4. **Visualization**: A data visualization platform was developed to display essential information, including paper ID, publication year, and other relevant codename details, allowing scientists to easily access and understand the data.

### Conclusion

This project aimed to create an efficient and accurate system for managing codenames used in drug development, ensuring consistent tracking and reliable access to important data for researchers. By addressing the challenges related to pipeline scheduling, data accuracy, and information organization, this project facilitates the efficient management of drug development information.
