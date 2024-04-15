const Workspacedata =  require( '../models/workspace')


const createWorkspace = async(req, res) =>  {

const Workspace = new Workspacedata({

propertyName: req.body.propertyName,
propertyAddress: req.body.propertyAddress,
Neighbourhood: req.body.Neighbourhood,
AvailibiltyDate: req.body. AvailibiltyDate,
LeaseTerm: req.body.LeaseTerm,
Price: req.body.Price, 
PreferredWork: req.body.PreferredWork,
Transportation: req.body.Transportation,
Parking: req.body.Parking, 
Smoking: req.body.Smoking,
Capacity: req.body.Capacity

})



try {
const CreatedWorkspace = await Workspace.save()
res.json(CreatedWorkspace)
}   

catch (err){
res.status(300).json({message: err.message})
}



}





module.exports = {createWorkspace};


