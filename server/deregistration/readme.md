**Disposal Request List**
----
   

* **URL**

  /disposal/request

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----

**Approved Disposal Request List**
----
   

* **URL**

  /disposal/request/approved

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where is_approved = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----

**Rejected Disposal Request List**
----
   

* **URL**

  /disposal/request/rejected

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where is_approved = false> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Disposal Report List**
----
   

* **URL**

  /disposal/report

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Open Disposal Report List**
----
   

* **URL**

  /disposal/report/open

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model where is_open = true> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Closed Disposal Report List**
----
   

* **URL**

  /disposal/report/closed

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model where is_open = false> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Disposed Equipment List**
----
   

* **URL**

  /disposal/equipment

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_equipment model> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Disposal Request List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/request

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Approved Disposal Request List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/request/approved

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id and is_approved = true> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Rejected Disposal Request List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/request/rejected

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id and is_approved = false> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Retrieve Disposal Request by Hospital ID and Request SN**
----
   

* **URL**

  /:hospital_id/disposal/request/sn/:request_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_sn=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id and request_sn = :request_sn> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Update Disposal Request by Hospital ID and Request SN**
----
   

* **URL**

  /:hospital_id/disposal/request/sn/:request_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_sn=[string]`

* **Data Params**

  `request_sn=[string]`<br/>
  `request_desc=[string]`<br/>
  `disposal_reason=[string]`<br/>
  `is_approved=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `cm_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Delete Disposal Request by Hospital ID and Request SN**
----
   

* **URL**

  /:hospital_id/disposal/request/sn/:request_sn

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_sn=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Retrieve Disposal Request by Request ID**
----
   

* **URL**

  /:hospital_id/disposal/:request_id/request

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id and id = :request_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Update Disposal Request by Hospital ID and Request ID**
----
   

* **URL**

  /:hospital_id/disposal/:request_id/request

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_id=[string]`

* **Data Params**

  `request_sn=[string]`<br/>
  `request_desc=[string]`<br/>
  `disposal_reason=[string]`<br/>
  `is_approved=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `cm_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Delete Disposal Request by Hospital ID and Request ID**
----
   

* **URL**

  /:hospital_id/disposal/:request_id/request

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_id=[string]`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Disposal Report List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/report

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model by Hospital ID> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Open Disposal Report List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/report/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model where hospital_id = :hospital_id and is_open = true> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Closed Disposal Report List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/report/closed

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model where hospital_id = :hospital_id and is_open = false> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Retrieve Disposal Report List by Hospital ID and Disposal SN**
----
   

* **URL**

  /:hospital_id/disposal/report/sn/:disposal_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `disposal_sn=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model where hospital_id = :hospital_id and disposal_sn = :disposal_sn> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Update Disposal Report by Hospital ID and Disposal SN**
----
   

* **URL**

  /:hospital_id/disposal/report/sn/:disposal_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `disposal_sn=[integer]`

* **Data Params**

  `report_sn=[string]`<br/>
  `report_desc=[string]`<br/>
  `disposal_reason=[string]`<br/>
  `disposal_tasks=[array of json]`<br/>
  `is_open=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `request_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Delete Disposal Report by Hospital ID and Request SN**
----
   

* **URL**

  /:hospital_id/disposal/report/sn/:disposal_sn

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `request_id=[string]`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Retrieve Disposal Report List by Hospital ID and Report ID**
----
   

* **URL**

  /:hospital_id/disposal/:report_id/report

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `report_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_report model where hospital_id = :hospital_id and id = :report_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Update Disposal Report by Hospital ID and Report ID**
----
   

* **URL**

  /:hospital_id/disposal/:report_id/report

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `report_id=[integer]`

* **Data Params**

  `report_sn=[string]`<br/>
  `report_desc=[string]`<br/>
  `disposal_reason=[string]`<br/>
  `disposal_tasks=[array of json]`<br/>
  `is_open=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `request_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Delete Disposal Report by Hospital ID and Report ID**
----
   

* **URL**

  /:hospital_id/disposal/:report_id/report

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `report_id=[string]`

* **Data Params**

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Disposed Equipment List by Hospital ID**
----
   

* **URL**

  /:hospital_id/disposal/equipment

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <all data in disposal_equipment model where hospital_id = :hospital_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Retrieve Disposed Equipment List by Hospital ID and Disposed Equipment ID**
----
   

* **URL**

  /:hospital_id/disposal/:disposed_equipment_id/equipment

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `disposed_equipment_id_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_equipment model where hospital_id = :hospital_id and id = :disposed_equipment_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Update Disposed Equipment by Hospital ID and Report ID**
----
   

* **URL**

  /:hospital_id/disposal/:disposed_equipment_id/equipment

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `disposed_equipment_id=[integer]`

* **Data Params**

  `equipment_details=[string]`<br/>
  `disposal_reason=[string]`<br/>
  `hospital_id=[integer]`<br/>
  `report_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Delete Disposed Equipment by Hospital ID and Report ID**
----
   

* **URL**

  /:hospital_id/disposal/:disposed_equipment_id/equipment

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `disposed_equipment_id=[string]`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <data sent> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`