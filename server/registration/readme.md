**Medical Equipment List**
----
   

* **URL**

  /equipment

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in medical_equipment model> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Medical Equipment List by Hospital ID**
----
   

* **URL**

  /:hospital_id/equipment

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in medical_equipment model where hospital_id = :hospital_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Add New Medical Equipment**
----
   

* **URL**

  /:hospital_id/equipment/registration

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `equipments_name=[string]`<br/>
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in medical_equipment model where hospital_id = :hospital_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`