import Button from "../Button/Button"

export default function MenuButton({ buttonText, onClick }) {
    return (
        <Button onClick={onClick}>{buttonText}</Button>
    )
}