const Bloglist = ({blogs,title}) => {
    //const items = props.items;
    //const title = props.title;
    return ( 
        <div className="bloglist">
        <h2>{title}</h2>
        {
            blogs.map((items) => (
                <div className="preview"  key={items.id}>
                    <h2>{items.title}</h2>
                    <p>Written by {items.author}</p>
                </div>
            ))
        }
        </div>
     );
}
 
export default Bloglist;