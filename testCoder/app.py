from flask import Flask

app = Flask(__name__)

@app.route('/testCoder/hello')
def hello():
    return "You are the best"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)