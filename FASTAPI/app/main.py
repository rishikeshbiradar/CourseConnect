import pickle
import tensorflow_hub as hub
import pandas as pd
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Body

df = pd.read_csv('new_df.csv')

# model_url = "https://drive.google.com/uc?export=download&id=10etXKfj6zt_L0PqV31b2VX9MVnBnUIYF"
model_url = "./universal_sentence_encoder_4"
model = hub.load(model_url)

with open('knn.pkl', 'rb') as file:
    knn = pickle.load(file)

def embed(text):
    return model(text)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post('/')
def recommend(text: str = Body(..., embed=True)):
    print(f'Received text: {text}')
    # Implement your recommendation logic here
    emb = embed([text])
    neighbours = knn.kneighbors(emb, return_distance=False)[0]
    recommendations = df['ID'].iloc[neighbours].to_dict()
    return recommendations


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)