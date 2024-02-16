class Message < ApplicationRecord
  belongs_to :user

  after_create_commit :notify_channel

  def notify_channel
    ActionCable.server.broadcast 'message_channel', { message: {user_email: user&.email, context: context} }
  end
end
