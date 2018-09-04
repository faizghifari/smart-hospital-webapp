**Add New Medical Equipment Type**
----
   

* **URL**

  /equipment_type

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `type_name=[string]`<br/>
  `type_desc=[string]`<br/>
  `type_hr_req=[string]`<br/>
  `type_time_params=[string]`<br/>
  `type_level=[integer]`<br/>
  `apparatus_type_id=[array of integer]`<br/>
  `spare_part_type_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `disposal_tasks=[array of object]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Medical Equipment Type Data**
----
   

* **URL**

  /equipment_type

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all medical equipment type data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Medical Equipment Type Name Where type_level = 1**
----
   

* **URL**

  /equipment_type/names

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all medical equipment type name where type_level = 1> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Medical Equipment Type by ID**
----
   

* **URL**

  /:type_id/equipment_type

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `type_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all medical equipment type where id = :type_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Medical Equipment Type Not Found`

----
**Get Medical Equipment Type Maintenance Plan by ID**
----
   

* **URL**

  /:type_id/equipment_type/mt_plan

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `type_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ respective quantitative_tasks, apparatus_list, and spare_part_list }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Medical Equipment Type Disposal Plan by ID**
----
   

* **URL**

  /:type_id/equipment_type/disposal_plan

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `type_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ respective disposal_tasks }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Medical Equipment Type Data**
----
   

* **URL**

  /:type_id/equipment_type

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `type_id=[integer]`

* **Data Params**

  `type_name=[string]`<br/>
  `type_desc=[string]`<br/>
  `type_hr_req=[string]`<br/>
  `type_time_params=[string]`<br/>
  `type_level=[integer]`<br/>
  `apparatus_type_id=[array of integer]`<br/>
  `spare_part_type_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `disposal_tasks=[array of object]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Medical Equipment Type Not Found`

----
**Delete Medical Equipment Type Data by ID**
----
   

* **URL**

  /:type_id/equipment_type

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `type_id=[integer]`

* **Data Params**

  `-`


* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Medical Equipment Type Not Found`

----
**Add New Apparatus Type Data**
----
   

* **URL**

  /apparatus_type

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `type_name=[string]`<br/>
  `type_desc=[string]`


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Apparatus Type Data**
----
   

* **URL**

  /apparatus_type

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all apparatus type data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Apparatus Type Data by ID**
----
   

* **URL**

  /:apparatus_type_id/apparatus_type

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `apparatus_type_id=[integer]`

* **Data Params**

  `-`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <apparatus type data by ID> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Apparatus Type Data by ID**
----
   

* **URL**

  /:apparatus_type_id/apparatus_type

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `apparatus_type_id=[integer]`

* **Data Params**

  `type_name=[string]`<br/>
  `type_desc=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Apparatus Type Not Found`

----
**Delete Apparatus Type Data by ID**
----
   

* **URL**

  /:apparatus_type_id/apparatus_type

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `apparatus_type_id=[integer]`

* **Data Params**

  `-`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 400 <br />
    **Content:** `Apparatus Type Not Found`

----
**Get All Apparatus Data**
----
   

* **URL**

  /apparatus

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all apparatus data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Add New Apparatus Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/apparatus

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `apparatus_name=[string]`<br/>
  `apparatus_desc=[string]`<br/>
  `apparatus_sn=[string]`<br/>
  `apparatus_calibration_due_on=[dateonly]`<br/>
  `apparatus_type_id=[integer]`<br/>
  `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Apparatus Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/apparatus

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all apparatus data where hospital_id = :hospital_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Apparatus Data by Hospital ID and Apparatus ID**
----
   

* **URL**

  /:hospital_id/:apparatus_id/apparatus

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `apparatus_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <all apparatus data where hospital_id = :hospital_id and id = :apparatus_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Apparatus Data by Hospital ID and Apparatus ID**
----
   

* **URL**

  /:hospital_id/:apparatus_id/apparatus

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `apparatus_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <all apparatus data where hospital_id = :hospital_id and id = :apparatus_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Apparatus Data by Hospital ID and Apparatus QR Code**
----
   

* **URL**

  /:hospital_id/apparatus/qrcode/:apparatus_qrcode

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `apparatus_qrcode=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all apparatus data where hospital_id = :hospital_id and apparatus_qrcode = :apparatus_qrcode> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Apparatus Data by Hospital ID and Apparatus QR Code**
----
   

* **URL**

  /:hospital_id/apparatus/qrcode/:apparatus_qrcode

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `apparatus_qrcode=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Apparatus Not Found`

----
**Add New Spare Part Type Data**
----
   

* **URL**

  /spare_part_type

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `type_name=[string]`<br/>
  `type_desc=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Spare Part Type Data**
----
   

* **URL**

  /spare_part_type

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all spare part type data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Spare Part Type Data by Part Type ID**
----
   

* **URL**

  /:part_type_ud/spare_part_type

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `part_type_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <spare part type data where id = :part_type_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Spare Part Type Data by Part Type ID**
----
   

* **URL**

  /:part_type_id/spare_part_type

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `part_type_id=[integer]`

* **Data Params**

  `type_name=[string]`<br/>
  `type_desc=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Spare Part Type Not Found`

----
**Delete Spare Part Type Data by Part Type ID**
----
   

* **URL**

  /:part_type_id/spare_part_type

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `part_type_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Spare Part Type Not Found`

----
**Get All Spare Part Data**
----
   

* **URL**

  /spare_part

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all spare part data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Add New Spare Part Data**
----
   

* **URL**

  /:hospital_id/spare_part

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `part_name=[string]`<br/>
  `part_desc=[string]`<br/>
  `part_sn=[string]`<br/>
  `part_qrcode=[string]`<br/>
  `part_qty=[integer]`<br/>
  `part_type_id=[integer]`<br/>
  `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Spare Part Data**
----
   

* **URL**

  /:hospital_id/spare_part

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all spare part data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Spare Part Data by Hospital ID and Spare Part ID**
----
   

* **URL**

  /:hospital_id/:part_id/spare_part

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `part_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <spare part data where hospital_id = :hospital_id and id = :part_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Spare Part Data by Hospital ID and Spare Part ID**
----
   

* **URL**

  /:hospital_id/:part_id/spare_part

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `part_id=[integer]`

* **Data Params**

  `part_name=[string]`<br/>
  `part_desc=[string]`<br/>
  `part_sn=[string]`<br/>
  `part_qty=[integer]`<br/>
  `part_type_id=[integer]`<br/>
  `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Spare Part Not Found`

----
**Delete Spare Part Data by Hospital ID and Spare Part ID**
----
   

* **URL**

  /:hospital_id/:part_id/spare_part

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `part_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Spare Part Not Found`

----
**Get Spare Part Data by Hospital ID and Spare Part SN**
----
   

* **URL**

  /:hospital_id/spare_part/sn/:part_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `part_sn=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <spare part data where hospital_id = :hospital_id and part_sn = :part_sn> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get Spare Part Data by Hospital ID and Spare Part QR Code**
----
   

* **URL**

  /:hospital_id/spare_part/qrcode/:part_qrcode

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `part_qrcode=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <spare part data where hospital_id = :hospital_id and part_qrcode = :part_qrcode> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Spare Part Data by Hospital ID and Spare Part SN**
----
   

* **URL**

  /:hospital_id/spare_part/sn/:part_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `part_sn=[string]`

* **Data Params**

  `part_name=[string]`<br/>
  `part_desc=[string]`<br/>
  `part_sn=[string]`<br/>
  `part_qrcode=[string]`<br/>
  `part_qty=[integer]`<br/>
  `part_type_id=[integer]`<br/>
  `hospital_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

  OR

  * **Code:** 404 <br />
    **Content:** `Spare Part Not Found`