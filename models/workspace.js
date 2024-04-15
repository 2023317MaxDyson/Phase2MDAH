const mongoose  = require( 'mongoose');
const Schema = mongoose.Schema 

const WorkspaceSchema = new Schema({
 
// Sign up information

FirstName: {
type: String,
required: true
},

 LastName: {
    type: String,
    required: true
    },
    

username: {
type: String,
required: true 
}, 


// Workspace Info 

propertyName: {
    type: String,
    required: true 
},

propertyAddress: {
    type: String,
    required: true 
},

Neighbourhood: {
    type: String,
    required: true 
},

AvailibiltyDate:{
    type: Date,
    required: true 
},

LeaseTerm: {
    type: Date,
    required: true 
},

Price: {
type: String,
required: true 
},

PreferredWork: {
    type: String,
    required: true 
    },


 Parking: {
type: Boolean,
required: true
 },


 Transportation: {
    type: Boolean,
    required: true
     },

    Smoking: {
      type: Boolean,
    required: true
    },
  
  
  Capacity:  {
        type: Number,
        required: true
    },

    // Go call to web service 

    OwnersName: {
        type: String,
        required: true
    },


    PhoneNumber: {
        type: String,
        required: true
    }
    
}, {timestamps: true });


const Workspace = mongoose.model('workspaces', WorkspaceSchema);
module.exports = Workspace;