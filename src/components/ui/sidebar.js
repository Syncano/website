const Sidebar = ({children}) => (
  <div className='Sidebar'>
    {children}

    <style jsx>{`
      .Sidebar {
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(11, 15, 21, 0.1);
        border: solid 1px rgba(11, 15, 21, 0.07);
        min-width: 270px;
        width: 100%;
      }
    `}</style>
  </div>
)

export default Sidebar
