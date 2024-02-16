class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.string :context, default: ""
      t.references :user

      t.timestamps
    end
  end
end
