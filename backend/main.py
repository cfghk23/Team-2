from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from collections import Counter


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///user-storage.db"

# Create the extension
db = SQLAlchemy()
# Initialise the app with the extension
db.init_app(app)


class User(db.Model):
    username=db.Column(db.String(250), unique=True, nullable=False)

    password=db.Column(db.String(250),primary_key=True)
with app.app_context():
    db.create_all()
with app.app_context():
    new_user=User(username='cbabhinav',password='$2a$04$nWFk.EWZsPNMPyDjcMR7YeoUyLubq6ygfWy5xODQhNiIJ/MmN93VW')

    db.session.add(new_user)

    db.session.commit()
with app.app_context():
    result=db.get_or_404(User,1)
    result.email='modified_email'
    db.session.commit()

@app.route('/getdata',methods=["GET","POST"])
def home_page():
    hashed_pass=request.get_json()
    final_data=0

    with app.app_context():

        query=db.session.execute(db.select(User).where(User.password==hashed_pass))
        list_of_users=query.scalars().all()
        if(list_of_users):
            is_exist=True
        else:
            is_exist=False





        to_return={'authentication':is_exist}

    return jsonify(to_return)








if __name__ == "__main__":
    app.run(port=5001,debug=True)
