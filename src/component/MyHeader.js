const MyHeader = ({ headText, leftchild, Rightchild }) => {
    return (
        <header>
            <div className="head_btn_left">{leftchild}</div>
            <div className="head_text">{headText}</div>
            <div className="head_btn_right">{Rightchild}</div>
        </header>
    );
};

export default MyHeader;
