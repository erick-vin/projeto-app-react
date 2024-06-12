
const NavigationItem = ({icon, text, borderColor = "blue"}) => {

    const borda = borderColor == "" ? "" : "border-" + borderColor + "-400"
    // border-green-400
    return (
        <li className={`flex items-center m-1 p-2 border ${borda} border-solid text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            {icon}
            <span className="flex-1 ms-3 whitespace-nowrap overflow-hidden overflow-ellipsis">{text}</span>
        </li>
    )
}

export default NavigationItem;