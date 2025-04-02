import { useRef } from "react";



export default function SearchBar(props) {
  const query = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryVal = query.current.value;
    props.fetchSongs(queryVal.trim())
  }
}

  const classes = useStyles()

//   return (
//     <form onSubmit={handleSearch} className="search-bar">
//       <TextField
//       className="search-bar"
//       inputRef={query}
//       id="outlined-full-width"
//       label="Search Songs"
//       style={{ margin: 8}}
//       placeholder="Song title"
//       required={true}
//       fullWidth
//       margin="normal"
//       InputLabelProps={{ shrink: true,}}
//       InputProps={{ startAdornment: (
//         <InputAdornment position="start">
//           <SearchIcon />
//           </InputAdornment>
//       ),
//     endAdornment: (
//       <InputAdornment position="end">
//         <Button className="go" variant="contained" type="submit">Go</Button>
//         </InputAdornment>
//     ),
//   classes: {
//     root: classes.root,
//     focused: classes.focused,
//     notchedOutline: classes.notchedOutline,
//   }}}
//   variant="outlined"
//        />
//     </form>
//   )
// }