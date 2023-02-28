import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

const PresentationViewer = (props) => {
  const viewer = useRef(this);
  const url = props.url;

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://cors-anywhere.herokuapp.com/' + url,
        isReadOnly: true,
        disabledElements: ['header'],
      },
      viewer.current,
    );
  },);

  return (
    <div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default PresentationViewer;
