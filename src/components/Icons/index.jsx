
const Icon = ({ ativo = false, Icon }) => {

    const listIcons = {
        "file" : [
            "M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z",
        ],
        "dashboard" : [
            "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z",
            "M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
        ]
    }

    const iconData = listIcons[Icon];

    var colorIcone = ativo ? "800" : "500"
    var styles = "w-6 h-6 text-gray-" + colorIcone + " transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
    return(
        <svg className={styles} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            {iconData.map((item, index) => {
                return (
                    <path key={index} fillRule="evenodd" d={item} clipRule="evenodd"/>
                )
            })}
        </svg>
    )
}

export default Icon