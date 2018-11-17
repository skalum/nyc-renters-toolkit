import React from 'react';

const toDollars = amount => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const Zillow = props => {

  return (
    <div>
    <section className="row bordered">
      <div className="col">
        <h4>Links</h4>
        <dl>
          <dd><a href={props.zillow.links.homeDetails} target="_blank" rel="noopener noreferrer">Home Details</a></dd>
          <dd><a href={props.zillow.links.graphsAndData} target="_blank" rel="noopener noreferrer">Graphs and Data</a></dd>
          <dd><a href={props.zillow.links.mapThisHome} target="_blank" rel="noopener noreferrer">Map This Home</a></dd>
          <dd><a href={props.zillow.links.comps} target="_blank" rel="noopener noreferrer">Comparables</a></dd>
        </dl>
      </div>
      <div className="col">
        <h4>Zestimate®</h4>
        <dl>
          <dt>Amount</dt>
          <dd>{toDollars(props.zillow.zestimate.amount)}</dd>
          <dt>Last Updated</dt>
          <dd>{props.zillow.zestimate.lastUpdated}</dd>
          <dt>30-Day Value Change</dt>
          <dd>{toDollars(props.zillow.zestimate.valueChange)}</dd>
          <dt>Valuation Range</dt>
          <dd>{`${toDollars(props.zillow.zestimate.valuationRange.low)} – ${toDollars(props.zillow.zestimate.valuationRange.high)}`}</dd>
        </dl>
      </div>
      <div className="col">
        <h4>Rent Zestimate®</h4>
        <dl>
          <dt>Amount</dt>
          <dd>{toDollars(props.zillow.rentZestimate.amount)}</dd>
          <dt>Last Updated</dt>
          <dd>{props.zillow.rentZestimate.lastUpdated}</dd>
          <dt>30-Day Value Change</dt>
          <dd>{toDollars(props.zillow.rentZestimate.valueChange)}</dd>
          <dt>Valuation Range</dt>
          <dd>{`${toDollars(props.zillow.rentZestimate.valuationRange.low)} – ${toDollars(props.zillow.rentZestimate.valuationRange.high)}`}</dd>
        </dl>
      </div>
    </section>
    </div>
  )
}

export default Zillow;
