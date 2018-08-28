**Update Medical Equipment Productivity by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/equipment/:equipment_id/productivity/usage

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `-` 

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Medical Equipment Raw Position Data in Security by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/equipment/:equipment_id/security/position/raw

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `latitude=[float]`<br/>
  `longitude=[float]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Position is not received`

----
**Update Medical Equipment PIC Data in Security by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/equipment/:equipment_id/security/pic

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `user_id=[integer]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**


----
**Update Medical Equipment Position Data in Security by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/equipment/:equipment_id/security/position

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `room_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**


----
**Update Medical Equipment Maintenance Data in Safety by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/equipment/:equipment_id/safety/maintenance

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `last_maintenance_date=[date]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Maintenance date is not received`

----
**Update Medical Equipment Report Data in Safety by Hospital ID and Medical Equipment ID**
----
   

* **URL**

  /:hospital_id/equipment/:equipment_id/safety/report

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `equipments_id=[integer]`

* **Data Params**

  `is_reported=[boolean]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Maintenance date is not received`