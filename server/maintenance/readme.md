//REPORTING 1

----
**Get All Maintenance PPM Data**
----
   

* **URL**

  /maintenance/ppm

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance ppm data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Open Maintenance PPM Data**
----
   

* **URL**

  /maintenance/ppm/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance ppm data where is_open = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Closed Maintenance PPM Data**
----
   

* **URL**

  /maintenance/ppm/closed

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance ppm data where is_open = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance CM Data**
----
   

* **URL**

  /maintenance/cm

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Open Maintenance CM Data**
----
   

* **URL**

  /maintenance/cm/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where is_open = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Closed Maintenance CM Data**
----
   

* **URL**

  /maintenance/cm/closed

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where is_open = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All BER Maintenance CM Data**
----
   

* **URL**

  /maintenance/cm/ber

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where is_ber = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Not BER Maintenance CM Data**
----
   

* **URL**

  /maintenance/cm/not_ber

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where is_ber = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance Work Order Data**
----
   

* **URL**

  /maintenance/work_order

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Open Maintenance Work Order Data**
----
   

* **URL**

  /maintenance/work_order/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where is_open = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Closed Maintenance Work Order Data**
----
   

* **URL**

  /maintenance/work_order/closed

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where is_open = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

//REPORTING 2

----
**Add New Maintenance PPM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/ppm

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `apparatus_id=[array of integer]`<br/>
  `spare_part_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `quantitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `est_tasks=[array of object]`<br/>
  `notes=[text]`<br/>
  `is_open=[boolean]`<br/>
  `ppm_sn=[string]`<br/>
  `ppm_result=[boolean]`<br/>
  `ppm_next_date=[dateonly]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance PPM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/ppm

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance ppm data where hospital_id = :hospital_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Open Maintenance PPM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/ppm/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance ppm data where hospital_id = :hospital_id and is_open = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance PPM Data by Hospital ID and PPM SN**
----
   

* **URL**

  /:hospital_id/maintenance/ppm/:ppm_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `ppm_sn=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance ppm data where hospital_id = :hospital_id and ppm_sn = :ppm_sn> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Maintenance PPM Data by Hospital ID and PPM SN**
----
   

* **URL**

  /:hospital_id/maintenance/ppm/:ppm_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `ppm_sn=[integer]`

* **Data Params**

  `apparatus_id=[array of integer]`<br/>
  `spare_part_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `quantitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `est_tasks=[array of object]`<br/>
  `notes=[text]`<br/>
  `is_open=[boolean]`<br/>
  `ppm_sn=[string]`<br/>
  `ppm_result=[boolean]`<br/>
  `ppm_next_date=[dateonly]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Delete Maintenance PPM Data by Hospital ID and PPM ID**
----
   

* **URL**

  /:hospital_id/maintenance/:ppm_id/ppm

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `ppm_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Add New Maintenance CM Data**
----
   

* **URL**

  /:hospital_id/maintenance/cm

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `apparatus_id=[array of integer]`<br/>
  `spare_part_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `quantitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `est_tasks=[array of object]`<br/>
  `notes=[text]`<br/>
  `is_open=[boolean]`<br/>
  `is_ber=[boolean]`<br/>
  `cm_sn=[string]`<br/>
  `cm_result=[boolean]`<br/>
  `cm_next_date=[dateonly]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `work_order_id=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance CM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Open Maintenance CM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id and is_open = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Closed Maintenance CM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/closed

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id and is_open = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All BER Maintenance CM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/ber

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id and is_ber = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Not BER Maintenance CM Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/not_ber

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id and is_ber = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance CM Data by Hospital ID and CM SN**
----
   

* **URL**

  /:hospital_id/maintenance/cm/:cm_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `cm_sn=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id and cm_sn = :cm_sn> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Maintenance CM Data by Hospital ID and CM SN**
----
   

* **URL**

  /:hospital_id/maintenance/cm/:cm_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `cm_sn=[string]`

* **Data Params**

  `apparatus_id=[array of integer]`<br/>
  `spare_part_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `quantitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `est_tasks=[array of object]`<br/>
  `notes=[text]`<br/>
  `is_open=[boolean]`<br/>
  `is_ber=[boolean]`<br/>
  `cm_sn=[string]`<br/>
  `cm_result=[boolean]`<br/>
  `cm_next_date=[dateonly]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `work_order_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Delete Maintenance CM Data by Hospital ID and CM SN**
----
   

* **URL**

  /:hospital_id/maintenance/cm/:cm_sn

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `cm_sn=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance CM Data by Hospital ID and CM ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/:cm_id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `cm_id=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <all maintenance cm data where hospital_id = :hospital_id and id = :cm_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Maintenance CM Data by Hospital ID and CM ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/:cm_id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `cm_id=[string]`

* **Data Params**

  `apparatus_id=[array of integer]`<br/>
  `spare_part_id=[array of integer]`<br/>
  `qualitative_tasks=[array of object]`<br/>
  `quantitative_tasks=[array of object]`<br/>
  `preventive_tasks=[array of object]`<br/>
  `est_tasks=[array of object]`<br/>
  `notes=[text]`<br/>
  `is_open=[boolean]`<br/>
  `is_ber=[boolean]`<br/>
  `cm_sn=[string]`<br/>
  `cm_result=[boolean]`<br/>
  `cm_next_date=[dateonly]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `work_order_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Delete Maintenance CM Data by Hospital ID and CM ID**
----
   

* **URL**

  /:hospital_id/maintenance/cm/:cm_id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `cm_id=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Add New Maintenance Work Order Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/work_order

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `wo_desc=[text]`<br/>
  `wo_designation=[text]`<br/>
  `wo_req_details=[text]`<br/>
  `wo_sn=[string]`<br/>
  `is_open=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `ppm_id=[integer]`<br/>
  `report_id=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance Work Order Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/work_order

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where hospital_id = :hospital_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Open Maintenance Work Order Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/work_order/open

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where hospital_id = :hospital_id and is_open = true> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Closed Maintenance Work Order Data by Hospital ID**
----
   

* **URL**

  /:hospital_id/maintenance/work_order/closed

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where hospital_id = :hospital_id and is_open = false> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance Work Order Data by Hospital ID and WO SN**
----
   

* **URL**

  /:hospital_id/maintenance/work_order/:wo_sn

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `wo_sn=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where hospital_id = :hospital_id and wo_sn = :wo_sn> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Maintenance Work Order Data by Hospital ID and WO SN**
----
   

* **URL**

  /:hospital_id/maintenance/work_order/:wo_sn

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `wo_sn=[string]`

* **Data Params**

  `wo_desc=[text]`<br/>
  `wo_designation=[text]`<br/>
  `wo_req_details=[text]`<br/>
  `wo_sn=[string]`<br/>
  `is_open=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `ppm_id=[integer]`<br/>
  `report_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Delete Maintenance Work Order Data by Hospital ID and WO SN**
----
   

* **URL**

  /:hospital_id/maintenance/work_order/:wo_sn

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `wo_sn=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Get All Maintenance Work Order Data by Hospital ID and WO ID**
----
   

* **URL**

  /:hospital_id/maintenance/:wo_id/work_order

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `wo_id=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all maintenance work order data where hospital_id = :hospital_id and id = :wo_id> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Update Maintenance Work Order Data by Hospital ID and WO ID**
----
   

* **URL**

  /:hospital_id/maintenance/:wo_id/work_order

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `wo_id=[string]`

* **Data Params**

  `wo_desc=[text]`<br/>
  `wo_designation=[text]`<br/>
  `wo_req_details=[text]`<br/>
  `wo_sn=[string]`<br/>
  `is_open=[boolean]`<br/>
  `hospital_id=[integer]`<br/>
  `user_id=[integer]`<br/>
  `equipment_id=[integer]`<br/>
  `ppm_id=[integer]`<br/>
  `report_id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <sent data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`

----
**Delete Maintenance Work Order Data by Hospital ID and WO ID**
----
   

* **URL**

  /:hospital_id/maintenance/:wo_id/work_order

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`<br/>
   `wo_id=[string]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{ <deleted data> }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `<error>`