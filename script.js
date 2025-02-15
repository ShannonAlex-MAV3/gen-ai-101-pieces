const facts = [
    "Fine-tuning LLMs can significantly improve their performance on specific tasks by training them on domain-specific data.",
    "Open-source LLMs like GPT-2 and BERT allow researchers and developers to experiment with state-of-the-art models without the need for expensive licenses.",
    "RAG models combine the strengths of generative models and retrieval systems, allowing them to generate responses based on both learned knowledge and external data.",
    "Fine-tuning can be done with relatively small datasets, making it accessible for niche applications where large datasets are not available.",
    "Using techniques like knowledge distillation, smaller models can be fine-tuned to mimic the performance of larger models, making them more efficient for deployment.",
    "RAG models can dynamically retrieve relevant documents from a knowledge base, enhancing the accuracy and relevance of generated responses.",
    "Fine-tuning often involves adjusting hyperparameters such as learning rate and batch size to optimize model performance.",
    "Open-source frameworks like Hugging Face's Transformers make it easy to fine-tune LLMs with just a few lines of code.",
    "RAG models can be particularly useful in applications like chatbots, where they can provide up-to-date information from external sources.",
    "The process of fine-tuning can also help mitigate biases present in pre-trained models by exposing them to more diverse training data."
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
