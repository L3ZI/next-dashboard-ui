const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-x font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-lamaSkyLight rounded-md p-4'>
                    <h2 className='font-medium'>Lorem ipsum doler sit</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                        2025-01-01
                    </span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Kibana Query Languageedit. The Kibana Query Language (KQL) is a simple
                    text-based query language for filtering data. ... Use KQL to filter documents where a value ...
                    Videos</p>
                <div className='bg-lamaPurpleLight rounded-md p-4'>
                    <h2 className='font-medium'>Lorem ipsum doler sit</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                        2025-01-01
                    </span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Kibana Query Languageedit. The Kibana Query Language (KQL) is a simple
                    text-based query language for filtering data. ... Use KQL to filter documents where a value ...
                    Videos</p>
                <div className='bg-lamaYellowLight rounded-md p-4'>
                    <h2 className='font-medium'>Lorem ipsum doler sit</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                        2025-01-01
                    </span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Kibana Query Languageedit. The Kibana Query Language (KQL) is a simple
                    text-based query language for filtering data. ... Use KQL to filter documents where a value ...
                    Videos</p>
            </div>
        </div>
    )
}

export default Announcements