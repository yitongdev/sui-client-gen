import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { ID } from "../../../0x2/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isMessageTicket(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::publish_message::MessageTicket`;
}

export interface MessageTicketFields {
  sender: ToField<ID>;
  sequence: ToField<"u64">;
  nonce: ToField<"u32">;
  payload: ToField<Vector<"u8">>;
}

export type MessageTicketReified = Reified<MessageTicket, MessageTicketFields>;

/**
 * Move struct: `MessageTicket`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::publish_message`
 */
export class MessageTicket implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::publish_message::MessageTicket`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = MessageTicket.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::publish_message::MessageTicket`;
  readonly $typeArgs: [];
  readonly $isPhantom = MessageTicket.$isPhantom;

  readonly sender: ToField<ID>;
  readonly sequence: ToField<"u64">;
  readonly nonce: ToField<"u32">;
  readonly payload: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: MessageTicketFields) {
    this.$fullTypeName = composeSuiType(
      MessageTicket.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::publish_message::MessageTicket`;
    this.$typeArgs = typeArgs;

    this.sender = fields.sender;
    this.sequence = fields.sequence;
    this.nonce = fields.nonce;
    this.payload = fields.payload;
  }

  static reified(): MessageTicketReified {
    return {
      typeName: MessageTicket.$typeName,
      fullTypeName: composeSuiType(
        MessageTicket.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::publish_message::MessageTicket`,
      typeArgs: [] as [],
      isPhantom: MessageTicket.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        MessageTicket.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        MessageTicket.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => MessageTicket.fromBcs(data),
      bcs: MessageTicket.bcs,
      fromJSONField: (field: any) => MessageTicket.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => MessageTicket.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        MessageTicket.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        MessageTicket.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        MessageTicket.fetch(client, id),
      new: (fields: MessageTicketFields) => {
        return new MessageTicket([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return MessageTicket.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<MessageTicket>> {
    return phantom(MessageTicket.reified());
  }
  static get p() {
    return MessageTicket.phantom();
  }

  static get bcs() {
    return bcs.struct("MessageTicket", {
      sender: ID.bcs,
      sequence: bcs.u64(),
      nonce: bcs.u32(),
      payload: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): MessageTicket {
    return MessageTicket.reified().new({
      sender: decodeFromFields(ID.reified(), fields.sender),
      sequence: decodeFromFields("u64", fields.sequence),
      nonce: decodeFromFields("u32", fields.nonce),
      payload: decodeFromFields(reified.vector("u8"), fields.payload),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): MessageTicket {
    if (!isMessageTicket(item.type)) {
      throw new Error("not a MessageTicket type");
    }

    return MessageTicket.reified().new({
      sender: decodeFromFieldsWithTypes(ID.reified(), item.fields.sender),
      sequence: decodeFromFieldsWithTypes("u64", item.fields.sequence),
      nonce: decodeFromFieldsWithTypes("u32", item.fields.nonce),
      payload: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.payload,
      ),
    });
  }

  static fromBcs(data: Uint8Array): MessageTicket {
    return MessageTicket.fromFields(MessageTicket.bcs.parse(data));
  }

  toJSONField() {
    return {
      sender: this.sender,
      sequence: this.sequence.toString(),
      nonce: this.nonce,
      payload: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.payload),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): MessageTicket {
    return MessageTicket.reified().new({
      sender: decodeFromJSONField(ID.reified(), field.sender),
      sequence: decodeFromJSONField("u64", field.sequence),
      nonce: decodeFromJSONField("u32", field.nonce),
      payload: decodeFromJSONField(reified.vector("u8"), field.payload),
    });
  }

  static fromJSON(json: Record<string, any>): MessageTicket {
    if (json.$typeName !== MessageTicket.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return MessageTicket.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): MessageTicket {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isMessageTicket(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a MessageTicket object`,
      );
    }
    return MessageTicket.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): MessageTicket {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isMessageTicket(data.bcs.type)
      ) {
        throw new Error(`object at is not a MessageTicket object`);
      }

      return MessageTicket.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return MessageTicket.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<MessageTicket> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching MessageTicket object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isMessageTicket(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a MessageTicket object`);
    }

    return MessageTicket.fromSuiObjectData(res.data);
  }
}
