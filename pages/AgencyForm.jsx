import React from 'react';

const AgencyForm = ({ formData, handleChange, handleSubmit, isEditing, handleCancel }) => (
    <div>
        <h1>{isEditing ? 'Edit Agency Data' : 'Enter Agency Data'}</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ flex: 1 }}>
                <input
                    type='date'
                    name='dateCollected'
                    value={formData.dateCollected}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='agency'
                    placeholder='Agency Name'
                    value={formData.agency}
                    onChange={handleChange}
                    required
                />
                <input
                    type='number'
                    name='fired'
                    placeholder='Fired'
                    value={formData.fired}
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='rehired'
                    placeholder='[Re]Hired'
                    value={formData.rehired}
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='totalPersonnel'
                    placeholder='Total Personnel'
                    value={formData.totalPersonnel}
                    onChange={handleChange}
                />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <textarea
                    name='sources'
                    placeholder='Sources'
                    value={formData.sources}
                    onChange={handleChange}
                    style={{ width: '100%', minHeight: '100px' }}
                ></textarea>
                <textarea
                    name='summary'
                    placeholder='Summary Notes'
                    value={formData.summary}
                    onChange={handleChange}
                    style={{ width: '100%', minHeight: '100px' }}
                ></textarea>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <button type='submit'>{isEditing ? 'Update' : 'Submit'}</button>
                    {isEditing && (
                        <button type='button' onClick={handleCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </form>
    </div>
);

export default AgencyForm;
