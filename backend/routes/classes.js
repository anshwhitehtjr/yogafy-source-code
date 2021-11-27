//#region namespaces
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../model/User');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = "AnShBaLaJiThAkUrIsAgOoDbOOY123123";
const Classes = require('../model/Classes');
//#endregion

//#region ROUTE 1: Get All the Classes: GET "/api/classes/fetchallclasses". Login required
router.get('/fetchallclasses', fetchuser, async (req, res) => {
   try {
      const classes = await Classes.find({ user: req.user.id });
      res.json(classes);
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred");
   }
});

//#region ROUTE 2: Add a new Class using: POST "/api/classes/addclass". Login required
router.post('/addclass', fetchuser, async (req, res) => {
   try {
      const { zoomid, title, desc, dateToJoin, state } = req.body;

      //#region Error handling
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ error: error.array() });
      }
      //#endregion

      if (!(state === 'upcoming' || state === 'remaining' || state === 'completed')) {
         res.status(500).send("Internal Server Error Occurred");
      }

      const classes = new Classes({
         zoomid, title, desc, dateToJoin, state, user: req.user.id
      });

      const savedClass = await classes.save();
      res.json(savedClass);

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred");
   }
});
//#endregion

//#region ROUTE 3: Delete a Note using: DELETE "/api/notes/cancelclass/:id". Login required

router.delete('/cancelclass/:id', fetchuser, async (req, res) => {
   try {
      // Find the Note to be deleted and delete it
      let classes = await Classes.findById(req.params.id);
      if (!classes) { return res.status(404).send("Not Found"); }

      // Allow deletion only if the user own the Note 
      if (classes.user.toString() !== req.user.id) {
         return res.status(401).send('Not Allowed');
      }

      classes = await Classes.findByIdAndDelete(req.params.id);
      res.send("The Class Has been Cancelled Successfully");
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred");
   }
});

//#endregion

module.exports = router;
