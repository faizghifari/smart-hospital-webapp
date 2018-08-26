**Login**
----
  Login with email and password, and sent email containing Login PIN to respective user. 

* **URL**

  /login/verify

* **Method:**

  `POST`

* **Data Params**

  `username`<br/>
  `password`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `email containing login PIN sent`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `User not found`

  OR

  * **Code:** 400 <br />
    **Content:** `Auth failed. Wrong password.`

----

**PIN Verification**
----
   Authenticate with Login PIN sent to user's email

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

  `username`<br/>
  `login_pin`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `login successful`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Session expired. Please login again.`

  OR

  * **Code:** 400 <br />
    **Content:** `Incorrect PIN!`

----

**Logout**
----
   Logout user

* **URL**

  /logout

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `logged out`