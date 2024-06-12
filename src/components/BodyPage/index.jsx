const BodyPage = ({children}) => {
    return (
        <div className="lg:p-4 lg:ml-64 dark:bg-gray-600">
            <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
                {children}
            </div>
        </div>
    )
}

export default BodyPage