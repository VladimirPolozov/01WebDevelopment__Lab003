function EditModal({ onCancel }) {
  return (
    <div className="modal" onClick={onCancel}>
      <div class="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Share with task</p>
        <div class="modal-buttons">
          <button class="btn"><i class="fas fa-copy"></i></button>
          <button class="btn"><i class="fab fa-vk"></i></button>
          <button class="btn"><i class="fab fa-telegram-plane"></i></button>
          <button class="btn"><i class="fab fa-whatsapp"></i></button>
          <button class="btn"><i class="fab fa-facebook-f"></i></button>
        </div>
      </div>
    </div>
  );
}
export default EditModal;