from flask import flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template(".html")

if __name__ == "__main__":
    app.run(debug = True)