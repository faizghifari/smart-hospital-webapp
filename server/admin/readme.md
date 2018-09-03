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