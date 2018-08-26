**Disposal Request List**
----
   

* **URL**

  /disposal/request

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

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
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

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
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where is_approved = true> }`
 
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
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

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
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

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
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

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
  
*  **URL Params**

   **Required:**
 
   `-`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_equipment model> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Disposal Request List by Hospital**
----
   

* **URL**

  /:hospital_id/disposal/request

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`

----

**Approved Disposed Request List by Hospital**
----
   

* **URL**

  /:hospital_id/disposal/request/approved

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `hospital_id=[integer]`

* **Data Params**

  `-`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ <all data in disposal_request model where hospital_id = :hospital_id and is_approved = true> }`
 
* **Error Response:**

  **Code:** 400 <br />
    **Content:** `<error>`