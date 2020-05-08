import React from 'react';
import withStore from '~/hocs/withStore';
import styles from './index.module.css';

console.log(styles)
class Notifications extends React.Component{

    render(){
        let model = this.props.stores.notifications;
        let message = model.list.map((note) => {
            return <div key={note.id}
                        className={styles.item}
                        onDoubleClick={() => {model.remove(note.id)}}
                    >
                    {note.message}
            </div>
        })
        return(
            <div className={styles.box}>
                {message}
            </div>
        )
    }
}

export default withStore(Notifications);