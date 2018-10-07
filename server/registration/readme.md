**Get Medical Equipment List**
----
   

* **URL**

  /equipment

* **Method:**

  `GET`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in medical_equipment model> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Medical Equipment List by Hospital ID**
----
   

* **URL**

  /:hospital_id/equipment

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

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
  `equipments_desc=[string]`<br/>
  `equipments_sn=[string]`<br/>
  `equipments_life_expectancy=[integer]`<br/>
  `equipments_value=[integer]`<br/>
  `equipments_value_currency=[string]`<br/>
  `manufacturing_date=[date]`<br/>
  `warranty_start_date=[dateonly]`<br/>
  `warranty_completion_date=[dateonly]`<br/>
  `is_on=[boolean]`<br/>
  `is_available=[boolean]`<br/>
  `current_safety=[integer]`<br/>
  `current_security=[integer]`<br/>
  `current_productivity=[integer]`<br/>
  `manufacturers_id=[integer]`<br/>
  `room_id=[integer]`<br/>
  `pic_mt_id=[integer]`<br/>
  `pic_usage_id=[integer]`<br/>
  `device_id=[integer]`<br/>
  `hospital_id=[integer]`<br/>
  `dep_id=[integer]`<br/>
  `div_id=[integer]`<br/>
  `main_photos=[blob]`<br/>
  `additional_photos=[array of blob]`<br/>
  `documents=[array of blob]`
  

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----
**Retrieve Medical Equipment List by Hospital ID and Medical Equipment SN**
----
   

* **URL**

  /:hospital_id/equipment/sn/:equipments_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_sn=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in medical_equipment model where hospital_id = :hospital_id and equipments_sn = :equipments_sn> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Medical Equipment Not Found`

----
**Update Medical Equipment List by Hospital ID and Medical Equipment SN**
----
   

* **URL**

  /:hospital_id/equipment/sn/:equipments_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_sn=[string]`

* **Data Params**

  `equipments_name=[string]`<br/>
  `equipments_desc=[string]`<br/>
  `equipments_sn=[string]`<br/>
  `equipments_life_expectancy=[integer]`<br/>
  `equipments_value=[integer]`<br/>
  `equipments_value_currency=[string]`<br/>
  `manufacturing_date=[date]`<br/>
  `warranty_start_date=[dateonly]`<br/>
  `warranty_completion_date=[dateonly]`<br/>
  `is_on=[boolean]`<br/>
  `is_available=[boolean]`<br/>
  `current_safety=[integer]`<br/>
  `current_security=[integer]`<br/>
  `current_productivity=[integer]`<br/>
  `manufacturers_id=[integer]`<br/>
  `room_id=[integer]`<br/>
  `pic_mt_id=[integer]`<br/>
  `pic_usage_id=[integer]`<br/>
  `device_id=[integer]`<br/>
  `hospital_id=[integer]`<br/>
  `dep_id=[integer]`<br/>
  `div_id=[integer]`<br/>
  `main_photos=[blob]`<br/>
  `additional_photos=[array of blob]`<br/>
  `documents=[array of blob]` 

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Medical Equipment Detail by Hospital ID and Medical Equipment SN**
----
   

* **URL**

  /:hospital_id/equipment/sn/details/:equipments_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_sn=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <details of medical_equipment where hospital_id = :hospital_id and equipments_sn = :equipments_sn> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Medical Equipment Not Found`

----
**Get Medical Equipment Data by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/:equipment_id/equipment

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data from medical_equipment model where hospital_id = :hospital_id and id = :equipments_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Medical Equipment Not Found`

----
**Update Medical Equipment List by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/:equipment_id/equipment

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `equipments_name=[string]`<br/>
  `equipments_desc=[string]`<br/>
  `equipments_sn=[string]`<br/>
  `equipments_life_expectancy=[integer]`<br/>
  `equipments_value=[integer]`<br/>
  `equipments_value_currency=[string]`<br/>
  `manufacturing_date=[date]`<br/>
  `warranty_start_date=[dateonly]`<br/>
  `warranty_completion_date=[dateonly]`<br/>
  `is_on=[boolean]`<br/>
  `is_available=[boolean]`<br/>
  `current_safety=[integer]`<br/>
  `current_security=[integer]`<br/>
  `current_productivity=[integer]`<br/>
  `manufacturers_id=[integer]`<br/>
  `room_id=[integer]`<br/>
  `pic_mt_id=[integer]`<br/>
  `pic_usage_id=[integer]`<br/>
  `device_id=[integer]`<br/>
  `hospital_id=[integer]`<br/>
  `dep_id=[integer]`<br/>
  `div_id=[integer]`<br/>
  `main_photos=[blob]`<br/>
  `additional_photos=[array of blob]`<br/>
  `documents=[array of blob]` 

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Medical Equipment Not Found`

----
**Delete Medical Equipment List by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/:equipment_id/equipment

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Medical Equipment Not Found`

----
**Get Medical Equipment Details by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/:equipment_id/equipment/details

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <details of medical_equipment where hospital_id = :hospital_id and id = :equipments_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Medical Equipment Not Found`