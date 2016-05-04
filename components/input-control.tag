<input-control>

    <div class="field">
        <input type={type} name={name} placeholder={placeholder}>
        <label>{label}</label>
    </div>

    <script>
        'use strict';

        this.type = opts.type || 'text';
        this.name = opts.name || '';
        this.placeholder = opts.placeholder || '';

    </script>

    <style>
        input-control .field {
            display: flex;
            flex-flow: column-reverse;
        }
        label, input {
            transition: all 0.2s;
}       
    </style>

</input-control>
