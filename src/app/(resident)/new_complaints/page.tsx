
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NewComplaints(){
    return (
        <>
        <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
          <div className=" bg-cyan-950 sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-4xl font-bold text-gray-200 flex items-center justify-center underline">New Complaint</h5>
            </div>
          </div>
        </div>

        <div className="bg-gray-700  -200 h-screen w-full flex items-center justify-center rounded-2xl">
  <div className="bg-blue-200 w-[90%] max-w-md p-6 rounded-xl shadow-lg">
    <div className='text-md font-bold text-blue-500'>
        <h1 className="text-center text-xl font-bold underline">COMPLAIN HERE</h1>
        <br /><br />
            <FormControl variant="outlined" fullWidth>
            <select id='opt'>
              <option value="Default">Choose</option>
              <option value="Resident">Maintenance</option>
              <option value="Resident">Electrical</option>
              <option value="Manager">Plumbing</option>
              <option value="Worker">Furniture</option>
            </select>
            </FormControl>
            <br />
            <br />
           <div className="flex items-center space-x-4">
          <label htmlFor="num" className="w-28 text-gray-800 font-medium">Flat No./Id</label>
          <TextField
            id="num"
            type="text"
            name="num"
            placeholder="Enter your Flat No./Id"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
            <br />
           <div className="flex items-center space-x-4">
          <label htmlFor="description" className="w-28 text-gray-800 font-medium">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className="flex-1 p-2 border rounded resize-none"
            rows={2}
          />
        </div>
        <br />
         <div className="flex items-center space-x-4">
          <label htmlFor="image" className="w-28 text-gray-800 font-medium">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="flex-1 text-sm"
          />
        </div>
        <br />
        <br />
        <div className='flex items-center justify-center '> 
            <Button variant="outlined" >Submit</Button>
        </div>
        
    </div>
  </div>
</div>

        </>
    )
}

