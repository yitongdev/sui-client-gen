import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEntry(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::priority_queue::Entry` + "<");
}

export interface EntryFields<T extends TypeArgument> {
  priority: ToField<"u64">;
  value: ToField<T>;
}

export type EntryReified<T extends TypeArgument> = Reified<Entry<T>, EntryFields<T>>;

/**
 * Move struct: `Entry`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 */
export class Entry<T extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::priority_queue::Entry`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Entry.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::priority_queue::Entry<${ToTypeStr<T>}>`;
  readonly $typeArgs: [ToTypeStr<T>];
  readonly $isPhantom = Entry.$isPhantom;

  readonly priority: ToField<"u64">;
  readonly value: ToField<T>;

  private constructor(typeArgs: [ToTypeStr<T>], fields: EntryFields<T>) {
    this.$fullTypeName = composeSuiType(
      Entry.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::priority_queue::Entry<${ToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.priority = fields.priority;
    this.value = fields.value;
  }

  static reified<T extends Reified<TypeArgument, any>>(T: T): EntryReified<ToTypeArgument<T>> {
    return {
      typeName: Entry.$typeName,
      fullTypeName: composeSuiType(
        Entry.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::priority_queue::Entry<${ToTypeStr<ToTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [ToTypeStr<ToTypeArgument<T>>],
      isPhantom: Entry.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => Entry.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Entry.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Entry.fromBcs(T, data),
      bcs: Entry.bcs(toBcs(T)),
      fromJSONField: (field: any) => Entry.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Entry.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => Entry.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => Entry.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => Entry.fetch(client, T, id),
      new: (fields: EntryFields<ToTypeArgument<T>>) => {
        return new Entry([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Entry.reified;
  }

  static phantom<T extends Reified<TypeArgument, any>>(
    T: T,
  ): PhantomReified<ToTypeStr<Entry<ToTypeArgument<T>>>> {
    return phantom(Entry.reified(T));
  }
  static get p() {
    return Entry.phantom;
  }

  static get bcs() {
    return <T extends BcsType<any>>(T: T) =>
      bcs.struct(`Entry<${T.name}>`, {
        priority: bcs.u64(),
        value: T,
      });
  }

  static fromFields<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Entry<ToTypeArgument<T>> {
    return Entry.reified(typeArg).new({
      priority: decodeFromFields("u64", fields.priority),
      value: decodeFromFields(typeArg, fields.value),
    });
  }

  static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Entry<ToTypeArgument<T>> {
    if (!isEntry(item.type)) {
      throw new Error("not a Entry type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Entry.reified(typeArg).new({
      priority: decodeFromFieldsWithTypes("u64", item.fields.priority),
      value: decodeFromFieldsWithTypes(typeArg, item.fields.value),
    });
  }

  static fromBcs<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: Uint8Array,
  ): Entry<ToTypeArgument<T>> {
    return Entry.fromFields(typeArg, Entry.bcs(toBcs(typeArg)).parse(data));
  }

  toJSONField() {
    return {
      priority: this.priority.toString(),
      value: fieldToJSON<T>(this.$typeArgs?.[0], this.value),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    field: any,
  ): Entry<ToTypeArgument<T>> {
    return Entry.reified(typeArg).new({
      priority: decodeFromJSONField("u64", field.priority),
      value: decodeFromJSONField(typeArg, field.value),
    });
  }

  static fromJSON<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    json: Record<string, any>,
  ): Entry<ToTypeArgument<T>> {
    if (json.$typeName !== Entry.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Entry.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Entry.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    content: SuiParsedData,
  ): Entry<ToTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEntry(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Entry object`);
    }
    return Entry.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: SuiObjectData,
  ): Entry<ToTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEntry(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Entry object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Entry.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Entry.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Entry<ToTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Entry object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isEntry(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Entry object`);
    }

    return Entry.fromSuiObjectData(typeArg, res.data);
  }
}
