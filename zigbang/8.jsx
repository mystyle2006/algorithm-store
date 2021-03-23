import react from 'react';
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const CommentList = (props) => {
return (<div>
    <form>
        <input type="text" />
        <input type="button" value="Post" />
    </form>
    <ul>
    </ul>
</div>);
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<CommentList />, rootElement);

var input = document.querySelector("input[type='text']");
input.value = "test";
input._valueTracker.setValue("");
input.dispatchEvent(new Event('change', { bubbles: true }));

document.querySelector("input[type='button']").click();
console.log(document.getElementsByTagName("ul")[0].innerHTML);