import './style.module.scss';
import { useReducer } from 'react';

function reducer (state, action) {
   switch(action.type) {
      case 'setName': {
         return {
           ...initialValue,
           name: action.payload,
         };
      }
      case 'setText': {
         return {
           ...state,
           text: action.payload,
         };
      }
      case 'setRating': {
         return {
           ...state,
           rating: action.payload,
         };
      }
      default: return state;
   }
}
const initialValue = {
   name: '',
   text: '',
   rating: 0,
}

const Form = () => {
   const [form, dispatch] = useReducer(reducer, initialValue);

   function setName(e) {
     dispatch({ type: "setName", payload: e.target.value });
   }
   function setText(e) {
     dispatch({ type: "setText", payload: e.target.value });
   }
   function setRating(e) {
     dispatch({ type: "setRating", payload: Number(e.target.value) });
   }

   return (
      <form>
         <h3>Add review</h3>
         <input type="text" name="name" placeholder="Name" value={form.name} onChange={setName} />
         <input type="text" name="text" placeholder="Your review" value={form.text} onChange={setText} />
         <input type="number" max='5' min='1' name="rating" value={form.rating} placeholder="Rating" onChange={setRating} />
         <input type="submit" value='Submit'/>
      </form>
  );
}

export default Form
