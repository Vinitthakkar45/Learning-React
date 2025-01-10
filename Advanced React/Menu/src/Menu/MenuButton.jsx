import Button from "../Button/Button"

export default function MenuButton({ children, toggle }) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}