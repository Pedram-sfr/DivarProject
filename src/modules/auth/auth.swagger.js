/**
 * @swagger
 * tags:
 *  name: Auth
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /auth/send-otp:
 *  post:
 *      semmary: login with otp
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/SendOTP"
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * 
 * /auth/check-otp:
 *  post:
 *      semmary: check otp for login user
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/CheckOTP"
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * 
 * /auth/logout:
 *  get:
 *      semmary: logout user
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */