import { Handle } from 'reactflow';

const HandlesWrapper = ({ children, handles, id }) => {
  return (
    <div style={{ width: 200, height: 'auto', padding: 10, border: '1px solid black' }}>
      {/* Inject Handles */}
      {handles && handles.map((handle, idx) => (
        <Handle
          key={idx}
          type={handle.type}
          position={handle.position}
          id={handle.id || `${id}-${handle.type}`}
          style={handle.style || {}}
        />
      ))}

      {/* Render Child Node (e.g., LLMNode, InputNode) */}
      {children}
    </div>
  );
};

export default HandlesWrapper;
