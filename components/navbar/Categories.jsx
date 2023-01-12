export default function Categories(){
    // Replace javascript:void(0) path with your path
    const navigation = [
            { title: "Customers", path: "#" },
            { title: "Careers", path: "#" },
            { title: "Guides", path: "#" },
            { title: "Partners", path: "#" },
        ]
        return(
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                {
                    navigation.map((item, idx) => (
                        <li key={idx} className="text-gray-600 hover:text-gray-900">
                            <a href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
}