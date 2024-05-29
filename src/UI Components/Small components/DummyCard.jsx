//Just a Dummy card to see if the code works//
import React from 'react';

function DummyCard(props) {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                margin: '10px',
                width: '200px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'grab',
            }}
        >
            <h2>{props.title}</h2>
            <p>ID: {props.id}</p>
            <p>Weight: {props.weight}</p>
            {props.children}
        </div>
    );
}

export default DummyCard;