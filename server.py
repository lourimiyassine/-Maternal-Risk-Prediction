import pickle
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#'Age','SystolicBP','DiastolicBP','BS','BodyTemp','HeartRate'
@app.route('/pred', methods=['POST'])
def pred():
    age = request.form.get('age')
    SystolicBP = request.form.get('SystolicBP')
    DiastolicBP = request.form.get('DiastolicBP')
    BS = request.form.get('BS')
    BodyTemp = request.form.get('BodyTemp')
    HeartRate = request.form.get('HeartRate')

    with open('model.pickle', 'rb') as f:
        model = pickle.load(f)
    reponse = model.predict([[age, SystolicBP, DiastolicBP, BS, BodyTemp, HeartRate]])
    if reponse == 0:
        return "non risk"
    if reponse == 1:
        return "mid risk"
    if reponse == 2:
        return "grand risk"

if __name__ == '__main__':
    app.run()
