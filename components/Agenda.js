import React, { PropTypes } from 'react'

const Presentation = ({ pres }) => {
  let cls = ["pres", "pres--" + pres.type];

  return (
    <div className={cls.join(" ")}>
      <div className="pres__title">{pres.start} {pres.title}</div>
      <div className="pres__author">{pres.author}</div>
      <div className="pres__description">{pres.description}</div>
    </div>
  )
}

const Agenda = ({ tracks }) => {

let pres = _.reduce(tracks, (res, track) => {
    _.each(track.presentations, (p) => {
        if(p) {
            res.push(p)
        }
    })
    return res
}, []);

  return (<div className="schedule">
    <ul>
        {_.map(pres, (p, i) => (
            <div key={"aaa" + i}>
                <Presentation pres={p} />
                <hr />
            </div>
        ))}
    </ul>
 
  </div>)
}


Agenda.propTypes = {

}

export default Agenda
