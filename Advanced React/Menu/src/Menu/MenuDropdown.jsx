export default function MenuDropdown({ children, open}) {
    return (
        open && <div className="menu-dropdown">
            {children}
        </div>
    )
}