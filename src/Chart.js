import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }
                }
            />
        </div>
    )
}

export default Chart