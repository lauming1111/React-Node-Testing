import React from 'react'
import * as R from 'ramda'
import uuid from 'uuid'

export const deepGenerateTree = (Card, Layer = 0) => R.map((data) => {
    if (R.length(data.son) > 0) {
        return (
            <React.Fragment key={uuid()}>
                <Card key={data._id} data={data} layer={Layer} /> {deepGenerateTree(Card, Layer + 1)(data.son)}
            </React.Fragment>
        )
    }
    return (<Card key={data._id} data={data} layer={Layer} />)
})
