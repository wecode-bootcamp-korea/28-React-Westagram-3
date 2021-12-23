import React, { useState, useRef } from 'react';
import './CommentList.scss';

const CommentList = () => {
  const [input, setInput] = useState('');

  const [lists, setLists] = useState([]);

  const [nextId, setNextId] = useState(0);

  const inputName = useRef(null);

  const onChange = e => {
    setInput(e.target.value);
  };
  const submit = e => {
    e.preventDefault();

    const about_lists = lists.concat({
      id: nextId,

      text: input,
    });

    setNextId(nextId + 1);

    setLists(about_lists);

    setInput('');
  };

  const input_list = lists.map(list => (
    <li
      key={list.id}
      onDoubleClick={() => removeList(list.id)}
      onClick={() => modify(list.id)}
    >
      <b>hyj__0911</b> : {list.text}
    </li>
  ));

  const removeList = id => {
    const about_lists = lists.filter(list => list.id !== id);

    setLists(about_lists);
  };

  const modify = id => {
    lists.map(list => {
      if (list.id === id) {
        inputName.current.focus();

        list.text = inputName.current.value;
      }
    });

    setLists(lists);

    setInput('');
  };

  return (
    <div>
      <ul>{input_list}</ul>

      <form onSubmit={submit}>
        <input
          name="list"
          type="text"
          placeholder="댓글 달기..."
          value={input}
          onChange={onChange}
          ref={inputName}
        />

        <button type="submit">게시</button>
      </form>

      <hr />
    </div>
  );
};

export default CommentList;
